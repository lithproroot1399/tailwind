import { SettingsTabs } from './components/SettingsTabs'
import * as Input from './components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
  <>
    <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>    
    
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Upadate your photo and personal default here.
              </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
            type="button"
            className=" rounded-lg px-4 py-2 text-sm font-semibold shadow-sm">
              Cancel
            </button>
            
            <button 
            type="submit"
            form="settings"
            className=" rounded-lg bg-violet-600 text-white hover:bg-violet-700 px-4 py-2 text-sm font-semibold shadow-sm ">
              Save
              </button>  
          </div>
        </div>

          <form 
          id="settings" 
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
          >
            <div className="grid gap-3 grid-cols-form">
              <label 
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
              >
                Name
              </label>
              <div className="grid gap-6 grid-cols-2">
                <Input.root>
                  <Input.Control id="firstName" defaultValue="Leandro" />
                </Input.root>

                <Input.root>
                  <Input.Control defaultValue="Sávio" />
                </Input.root>              
                </div>  
            </div>

            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
              >
                Email address
              </label>
                <Input.root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                  <Input.Control
                  id="email"
                  type="email"
                  defaultValue="leandro.savio@mellore.com.br"
                   />
                </Input.root>
    
            </div>

            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
              >
                Your photo
                <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile
                </span>
              </label>
              
              <div className="flex items-start gap-5">
              <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="w-8 h-8 text-violet-500" />
                </div>

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
                
                <input type="file" className="sr-only" id="photo" />
                
                </div>
              
            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="role"
              className="flex text-sm font-medium text-zinc-700"
              >
                Role
              </label>
                <Input.root>
                  <Input.Control
                  id="role"
                  defaultValue="CEO"
                   />
                </Input.root>
                </div>

                <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
              >
                Country
              </label>
                <div></div>    
            </div>

            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="timeszone"
              className="text-sm font-medium text-zinc-700"
              >
                TimesZone
              </label>
                <div></div>    
            </div>

            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700"
              >
                Bio
                <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                  This will be displayed on your profile
                  </span>
              </label>
          <div></div>    
            </div>

            <div className="grid gap-3 grid-cols-form pt-5">
              <label 
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
              >
                Portifolio projects
                <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                  Shere a few snippets of your work
                  </span>
              </label>
          <div></div>    
            </div>
            <div className="flex items-center justify-end gap-2 pt-5">
            <button 
            type="button"
            className=" rounded-lg px-4 py-2 text-sm font-semibold shadow-sm">
              Cancel
            </button>
            
            <button 
            type="submit"
            className=" rounded-lg bg-violet-600 text-white hover:bg-violet-700 px-4 py-2 text-sm font-semibold shadow-sm ">
              Save
              </button>
            </div>
            </div>
          </form>
      </div>
    </>
  )
}
