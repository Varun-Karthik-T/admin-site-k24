import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

const rootlink = "http://localhost:5173/";

function handleWorkshopclick() {
    window.location.href = rootlink + 'workshopstats';
}

function handleEventclick() {
    window.location.href = rootlink + 'eventstats';
}

function handleParticipantsclick(){
    window.location.href = rootlink + 'participants';
}

function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuItem className="w-20px">
                            <NavigationMenuLink onClick={handleWorkshopclick} className="cursor-pointer w-20">Workshop</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink onClick={handleEventclick} className="cursor-pointer">Event</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem onClick={handleParticipantsclick} className="cursor-pointer">Participants</NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export { Navbar };
