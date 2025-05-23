"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

export default function PhoneSubscribe() {
  const { toast } = useToast()
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const validatePhone = (phoneNumber: string) => {
    // Basic validation for US and international numbers
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    return phoneRegex.test(phoneNumber.replace(/\s+/g, "").replace(/-/g, "").replace(/$$/g, "").replace(/$$/g, ""))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number")
      return
    }

    setIsSubmitting(true)

    try {
      // Call the subscribe API route
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      })

      if (response.ok) {
        toast({
          title: "Subscription successful!",
          description: "You'll receive updates about our upcoming shows and releases.",
          variant: "default",
        })
        setPhone("")
      } else {
        const data = await response.json()
        throw new Error(data.message || "Subscription failed")
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-charcoal border-brokenYellow/20 h-full">
      <CardHeader>
        <CardTitle className="text-2xl text-brokenYellow">Stay Updated</CardTitle>
        <CardDescription>Get text notifications about upcoming shows and releases.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone size={16} className="text-offWhite/50" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-black/50 border-brokenYellow/20 focus:border-brokenYellow pl-10"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <p className="text-xs text-offWhite/50 mt-1">
              Standard message and data rates may apply. You can unsubscribe at any time.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-brokenYellow text-black hover:bg-brokenYellow/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Notify Me"}
          </Button>
        </form>

        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold text-brokenYellow">Other Ways to Connect</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-brokenYellow">•</span>
              <span>Follow us on social media for daily updates</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brokenYellow">•</span>
              <span>Join our mailing list for exclusive content</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brokenYellow">•</span>
              <span>Check our website regularly for new announcements</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
