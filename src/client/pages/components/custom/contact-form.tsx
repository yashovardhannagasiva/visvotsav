import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { Mail, MessageCircle, User } from 'lucide-react'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'

const ContactForm = () => {
  return (
    <Card className="p-5 w-full">
    <CardHeader>
      <CardTitle className="mb-5">Contact Us</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-5 ">
      <div className="relative">
        <User className="h-4 w-4 text-muted-foreground absolute top-3 left-2" />
        <Input placeholder="Name" className="pl-8 w-full" />
      </div>
      <div className="relative">
        <Mail className="h-4 w-4 text-muted-foreground absolute top-3 left-2" />
        <Input placeholder="email" className="pl-8" />
      </div>
      <div className="relative">
        <MessageCircle className="h-4 w-4 text-muted-foreground absolute top-3 left-2" />
        <Textarea
          placeholder="message"
          className="pl-8 resize-none"
        ></Textarea>
      </div>
      <Button>Submit</Button>
    </CardContent>
  </Card>
  )
}

export default ContactForm