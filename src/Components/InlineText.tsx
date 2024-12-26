export function InlineText({children}:{
    children:string
}){
    return(
        <>
        <b className="inline-block text-6xl font-bold
      bg-gradient-to-r from-indigo-500 via-gray-500 to-pink-500 
      bg-clip-text text-transparent underline decoration-pink-500 decoration-8 underline-offset-8">{children}</b>
        </>
    )
}