import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Calculator, Calendar, Smile, } from 'lucide-react'

interface CommandDialogType {
    open: boolean,
    setOpen: (open: boolean) => void
}

const CommandMenu: React.FC<CommandDialogType> = ({ open, setOpen }) => {
    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <Calendar />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <Smile />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <Calculator />
                        <span>Calculator</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </CommandDialog>
    )
}

export default CommandMenu
