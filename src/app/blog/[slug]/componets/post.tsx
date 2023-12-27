interface Props {
  slug: string
}

export default function Post({slug}: Props) {
  return <p>Post: {slug}</p>
}