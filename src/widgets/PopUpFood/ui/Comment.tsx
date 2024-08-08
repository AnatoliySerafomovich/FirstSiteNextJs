import { Review } from "@/entities/food";
import { StarIcon } from "@/shared/ui";

export function Comment({comment}:{comment:Review}){
    const ratingStars = new Array(Math.floor(comment.rating)).fill(0)
    return(
        <div className="flex flex-col p-2 px-4 bg-[#2D303E] rounded-lg">
            <div className="flex gap-2 items-center">
                <div className="text-primary text-lg">{comment.reviewerEmail}</div>
                <div className="text-white font-semibold">{new Date(comment.date.toString()).toLocaleDateString()}</div>
                <div className="flex gap-[1px]">
                    {ratingStars.map((e,id)=>(
                        <StarIcon className="w-5 h-5" key={id}/>
                    ))}
                </div>
            </div>
            <div className="text-white text-lg">{comment.comment}</div>
        </div>
    )
}