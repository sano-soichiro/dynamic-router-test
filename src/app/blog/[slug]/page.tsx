import Post from "./componets/post"

interface Props {
  params: {
    slug: string
  }
}
 
export default function Page({params}: Props) {
  return (
    <Post slug={params.slug} />
    // <div>{params.slug}</div>
  )
}