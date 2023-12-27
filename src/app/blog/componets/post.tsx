import { env } from "process";

export default function Post() {
  return <p>{process.env.TEST_DATA}</p>
}