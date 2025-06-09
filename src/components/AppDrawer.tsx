// components/AppDrawer.tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const AppDrawer = () => {
    return (
        <header
            className="w-full fixed top-0 left-0 flex items-center justify-between px-4 py-2 bg-white shadow-xl z-50">
            {/* Left Side: Your Name */}
            <div className="fixed bottom-2 left-2 text-xs md:text-base">
                <span className="block sm:hidden">XS</span>
                <span className="hidden sm:block md:hidden">SM</span>
                <span className="hidden md:block lg:hidden">MD</span>
                <span className="hidden lg:block xl:hidden">LG</span>
                <span className="hidden xl:block">XL</span>
            </div>
            <div className="text-xl font-bold">Gurnish Singh</div>

            {/* Desktop Nav Links */}
            <nav className="hidden sm:flex gap-6 text-lg font-medium">
                <a href="#education" className="hover:underline">Education</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#experience" className="hover:underline">Experience</a>
                <a href="#blog" className="hover:underline">Blog</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <div className="sm:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64">
                        <nav className="flex flex-col gap-4 mt-10 text-lg font-medium">
                            <a href="#education" className="hover:underline">Education</a>
                            <a href="#skills" className="hover:underline">Skills</a>
                            <a href="#experience" className="hover:underline">Experience</a>
                            <a href="#blog" className="hover:underline">Blog</a>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default AppDrawer;