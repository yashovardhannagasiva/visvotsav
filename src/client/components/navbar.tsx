import React from "react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
    const date=new Date();
    const year=date.getFullYear();

  return (
    <nav className=" top-0 w-full h-12  backdrop-blur flex justify-between items-center px-3 py-8 sticky">
      <div>
        <h2 className="md:text-2xl text-xl text-foreground font-bold ">Visvotsav <span className="text-foreground max-sm:hidden">{year}</span></h2>
      </div>
      <div className="flex gap-2">
        <div>
          <Button className="bg-primary hidden sm:flex  text-white rounded-full px-4 py-3 ">
            Register Here
          </Button>
        </div>
        <ThemeToggle />
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent onClick={()=>{}}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col items-center mt-4 mb-1 p-2">
                <SheetClose>
                <li className="py-2">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                </SheetClose>
                <Separator className="my-1" />
                <SheetClose>
                <li className="py-2">
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </a>
                </li>
                </SheetClose>
                
                <Separator className="my-1" />
                <SheetClose>
                <li className="py-2">
                  <a
                    href="#schedule"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Schedule
                  </a>
                </li>
                </SheetClose>
                <Separator className="my-1" />
                <SheetClose>
                <li className="py-2">
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </a>
                </li>
                </SheetClose>
                <Separator className="my-1" />
                <SheetClose>
                <li className="py-2">
                  <a
                    href="#how-to-register"
                    className="text-muted-foreground hover:text-primary"
                  >
                    How to Register ?
                  </a>
                </li>
                </SheetClose>
                <Separator className="my-1" />
                <SheetClose>
                <li className="py-2">
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                </SheetClose>
                <Separator className="my-1" />
                <SheetClose>
                <Button className="bg-primary  w-full text-white rounded-full px-4 py-3 ">
                  Register Here
                </Button>
                </SheetClose>
              </ul>
             
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
