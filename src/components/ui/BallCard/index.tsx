import styles from "./styles.module.css";

export default function BallCard ({
    isUp=true,
    title,
    body,
    borderColor = "#3B3B3A" ,
    children,
    bgColor = "#3B3B3A1A"
}:{
    isUp:boolean,
    title:string;
    body:string;
    borderColor?:string;
    children:React.ReactNode;
    bgColor?:string;
}){
    return(
        <div className='space-y-4'>
            <div 
                className={`
                ${isUp ? styles.ballup : styles.balldown } 
                rounded-full bg-secondary-a1/10 aspect-square`
                }
                style={{ '--border-color': borderColor , backgroundColor: bgColor } as React.CSSProperties}
            >
                {children}
            </div>
            <div className='px-1 md:px-4 space-y-4'>
                <h3 className='font-bold text-secondary-a1 text-base'>{title}</h3>
                <p className='text-sm font-medium text-[#818181]'>
                    {body}
                </p>
            </div>
        </div>
        
    )
}