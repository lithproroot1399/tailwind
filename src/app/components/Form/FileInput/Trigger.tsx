import { UploadCloud } from "lucide-react";

export function Trigger() {
    return (
        <label 
                htmlFor="photo"
                className="flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
                >
                  Selecionar arquivo
                <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2">
                  <UploadCloud className="h-5 w-5 text-zinc-600" />
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <span className="text-sm">
                  <span className="text-semibolt text-violet-700">Click to upload</span> or drag an drop</span>
                  <span className="text-xs">
                    SVG, PNG, JPG, or GIF (max. 800x400px)
                    </span>
                </div>
                </label>
    )
}