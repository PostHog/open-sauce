import { getAllRecipes } from "@/data/recipes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/chef-hero.jpg"
          alt="Open Sauce Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xl md:text-2xl text-white/90 max-w-xl mx-auto">
            Recipes our colleagues swear <s>at</s> by
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/recipe/${recipe.slug}`}
              className="group block"
            >
              <article className="wobbly rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {recipe.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm line-clamp-2">
                    {recipe.intro}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                    <div className="flex gap-4">
                      <span>{recipe.prepTime} prep</span>
                      <span>{recipe.cookTime} cook</span>
                    </div>
                    <Image
                      src={recipe.author.imageUrl}
                      alt={recipe.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
