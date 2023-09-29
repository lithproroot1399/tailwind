import { User } from "lucide-react";

export interface ImagePreviewProps {}

export function ImagePreview(props: ImagePreviewProps) {
    return (
        <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="w-8 h-8 text-violet-500" />
                </div>
    )
}