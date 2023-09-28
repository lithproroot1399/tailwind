import {LogOut} from 'lucide-react'

export function Profile() {
    return (
        <div className="grid item-center gap-3 grid-cols-profile">
        <img
        src="https://github.com/lithproroot1399.png"
        className="h-10 w-10 rounded-full"
        alt=""
        />
        <div className="flex flex-col truncate">
            <span className="text-sm font-semibold text-zinc-700">
                Leandro Sávio
            </span>
            <span className="truncate text-sm text-zinc-500">
                leandro.savio@mellore.com.br
            </span>
        </div>
        <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
            <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
    </div>
    )
}