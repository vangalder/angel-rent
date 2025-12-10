'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>()

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitStatus('success')
      reset()
      
      // Track form submission in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: 'email_submission',
        })
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to join waitlist')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4 relative z-30">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            className={`font-sans w-full h-11 md:h-12 px-4 border ${
              errors.email ? 'border-red-500' : 'border-neutral-600/50'
            } rounded-lg text-white placeholder:text-neutral-500 
            focus:outline-none focus:border-primary-base focus:ring-2 focus:ring-primary-base/50
            transition-all duration-fast relative z-30
            bg-transparent text-sm md:text-base`}
            style={{
              backgroundColor: 'rgba(30, 30, 30, 0.5)',
              backdropFilter: 'blur(4px)'
            }}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="font-sans text-red-400 text-xs md:text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-sans h-11 md:h-12 px-6 md:px-8 bg-primary-base text-neutral-900 font-semibold rounded-lg
          hover:bg-primary-dark transition-all duration-fast
          hover:-translate-y-0.5 shadow-sm hover:shadow-md
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          whitespace-nowrap relative z-30 text-sm md:text-base"
        >
          {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="p-3 bg-green-900/30 border border-green-700 rounded-md">
          <p className="text-green-300 text-sm">
            ✓ Success! You&apos;ve been added to the waitlist.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-3 bg-red-900/30 border border-red-700 rounded-md">
          <p className="text-red-300 text-sm">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}
    </div>
  )
}

