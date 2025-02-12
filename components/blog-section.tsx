import { GradientButton } from "@/components/GradientButton"
import { SectionHeading } from "@/components/SectionHeading"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Blog Content 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
    {
      title: "Blog Content 2",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
    {
      title: "Blog Content 3",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyla_Website-Bz2CDlkBGoK8RlsFMKfZSlVs8xeoUi.png",
    },
  ]

  return (
    <section className="py-10 bg-black text-white mb-10">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Blog</SectionHeading>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-lg border-[3px] border-[#0055ff]/20 bg-[#111] overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400">
                  Figma ipsum component variant main layer. Quote boolean frame scale draft subtract slice.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <GradientButton variant="outline">More</GradientButton>
        </div>
      </div>
    </section>
  )
}

