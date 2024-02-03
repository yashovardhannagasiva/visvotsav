
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
interface MessageCardProps {
    message: string;
    time: string;
  }
const MessageCard = ({message,time}:MessageCardProps) => {
  return (
    <div className="bg-primary flex flex-col self-start p-2 max-w-[50%] rounded-sm">
    <span className="text-foreground">
    {message}
    </span>
    <div className="self-end flex gap-2 items-center">
      <span>
        {time}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreHorizontal className="h-4 w-4 mt-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-accent rounded-sm p-4 mt-3">
          <DropdownMenuGroup className="flex flex-col gap-2">
            <DropdownMenuItem className="cursor-pointer hover:text-primary">Edit</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-primary ">Delete</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-primary">Message Info</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
  )
}

export default MessageCard