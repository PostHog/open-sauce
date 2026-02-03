import { getRecipeBySlug, getAllRecipes } from "@/data/recipes";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const recipes = getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: "Recipe Not Found" };

  return {
    title: `${recipe.title} | Open Sauce`,
    description: recipe.intro.slice(0, 160),
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <article>
      <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-8">
        {recipe.image && (
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {recipe.title}
          </h1>
          <p className="text-white/80 text-lg">
            Recipes our colleagues swear <s>at</s> by
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <a
          href={recipe.author.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mb-6 group"
        >
          <Image
            src={recipe.author.imageUrl}
            alt={recipe.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
            {recipe.author.name}
          </span>
        </a>

        <div className="flex gap-6 text-[var(--muted)] mb-8 text-sm">
          <span>Prep: {recipe.prepTime}</span>
          <span>Cook: {recipe.cookTime}</span>
          <span>Serves: {recipe.servings}</span>
        </div>

        <p className="text-lg leading-relaxed mb-12 text-[var(--foreground)]/90">
          {recipe.intro}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">
            Method
          </h2>
          <ol className="space-y-6">
            {recipe.method.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="pt-1 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {recipe.notes && (
          <section className="bg-[var(--accent-light)] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">Chef&apos;s Notes</h2>
            <p className="leading-relaxed text-[var(--foreground)]/80">
              {recipe.notes}
            </p>
          </section>
        )}
      </div>
    </article>
  );
}
