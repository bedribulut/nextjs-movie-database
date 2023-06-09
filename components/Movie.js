import Link from "next/link"
import Image from "next/image"

function Movie({title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original/"

  return (
    <div>
        <h1 className="text-center text-2xl">{title}</h1>
        <h2 className="text-center mb-3 text-gray-400">{release_date}</h2>
        <Link href={`/`}>
            <Image
                src={imagePath + poster_path}
                alt={title}
                width={500}
                height={500}
            />
        </Link>
    </div>
  )
}

export default Movie