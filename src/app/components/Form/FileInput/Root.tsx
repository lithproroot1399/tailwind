import { ComponentProps, createCountext } from "react"

export type RootProps = ComponentProps<'div'>

const FileInputContext = createContext({} as FileInputContextType)

type FileInputContextType = {
    id: string
}

export function Root(props: RootProps) {
    return <div {...props} />
}