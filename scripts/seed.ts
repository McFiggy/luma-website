
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🌱 Seeding database...');

    // Create sample blog posts
    const blogPosts = [
      {
        title: 'How Plasma Technology is Revolutionizing Agriculture',
        slug: 'plasma-technology-agriculture-revolution',
        excerpt: 'Discover the science behind nonthermal plasma and its transformative impact on seed treatment and agricultural sustainability.',
        content: `
          <p>Plasma technology represents a paradigm shift in agricultural seed treatment, offering a chemical-free alternative that enhances seed performance while supporting sustainable farming practices. As agriculture faces increasing pressure to reduce chemical inputs and environmental impact, nonthermal plasma emerges as a revolutionary solution that addresses these challenges head-on.</p>

          <h2>Understanding Nonthermal Plasma</h2>
          
          <p>Nonthermal plasma, also known as cold plasma, is a partially ionized gas that operates at near-ambient temperatures. Unlike thermal plasma used in industrial applications, nonthermal plasma maintains low bulk temperature while generating highly reactive species. This unique characteristic makes it ideal for treating biological materials without causing thermal damage.</p>

          <p>The plasma generation process involves applying high-voltage electrical fields to ambient air, creating a cascade of ionization events that produce reactive oxygen and nitrogen species. These species include hydroxyl radicals (OH•), atomic oxygen (O), ozone (O₃), and nitric oxide (NO), all of which play crucial roles in pathogen elimination and seed surface modification.</p>

          <h2>Revolutionary Applications in Agriculture</h2>

          <p>The agricultural applications of plasma technology extend far beyond traditional seed treatment methods. Key applications include:</p>

          <ul>
            <li><strong>Pathogen Elimination:</strong> Plasma effectively destroys bacteria, fungi, and viruses on seed surfaces through oxidative damage to cellular structures.</li>
            <li><strong>Surface Modification:</strong> Treatment creates hydrophilic sites on seed coats, improving water uptake and germination kinetics.</li>
            <li><strong>Metabolic Activation:</strong> Plasma can trigger dormancy-breaking mechanisms and activate metabolic pathways in seeds.</li>
            <li><strong>Chemical-Free Processing:</strong> The process requires only electrical energy and ambient air, eliminating chemical inputs and residues.</li>
          </ul>

          <p>For growers, researchers, and industry stakeholders, the question is not whether plasma technology will transform agriculture, but how quickly they can adapt to harness its revolutionary potential.</p>
        `,
        author: 'Seth McQuillan',
        category: 'Technology',
        tags: ['Plasma', 'Agriculture', 'Innovation', 'Sustainability'],
        image: 'https://cdn.abacus.ai/images/2cd18140-5bbd-419a-bc21-0c3d4416f911.png',
        featured: true,
        readTime: '8 min read',
        published: true
      },
      {
        title: 'The Future of Sustainable Seed Treatment',
        slug: 'sustainable-seed-treatment-future',
        excerpt: 'Exploring how chemical-free seed treatment technologies are shaping the future of sustainable agriculture.',
        content: `
          <p>As agriculture faces mounting pressure to reduce chemical inputs while maintaining productivity, sustainable seed treatment technologies are emerging as critical solutions for the industry's future. The traditional reliance on chemical fungicides and pesticides for seed protection is being challenged by innovative approaches that deliver superior results without environmental compromise.</p>

          <h2>The Sustainability Challenge</h2>

          <p>Modern agriculture stands at a crossroads. Consumer demand for chemical-free food continues to grow, while regulatory agencies worldwide tighten restrictions on synthetic pesticides. Simultaneously, climate change intensifies pathogen pressure and creates more challenging growing conditions. This convergence of factors demands innovative solutions that can deliver crop protection without environmental costs.</p>

          <p>The transition to sustainable seed treatment is not just an environmental imperative—it's a business opportunity that aligns profitability with responsibility, creating value for growers, consumers, and the planet.</p>
        `,
        author: 'Noah [Last name TBD]',
        category: 'Sustainability',
        tags: ['Sustainability', 'Seed Treatment', 'Environment', 'Future'],
        image: 'https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg',
        featured: false,
        readTime: '6 min read',
        published: true
      },
      {
        title: 'Effective Pathogen Control Without Chemicals',
        slug: 'pathogen-control-without-chemicals',
        excerpt: 'Learn how plasma treatment achieves superior pathogen elimination while maintaining seed health and viability.',
        content: `
          <p>Traditional chemical seed treatments have long been the standard for pathogen control in agriculture. However, mounting concerns about environmental impact, regulatory restrictions, and pathogen resistance have created urgent demand for alternative approaches. Plasma treatment technology offers a revolutionary solution that achieves superior pathogen elimination without chemical inputs or residues.</p>

          <h2>Understanding Pathogen Challenges</h2>

          <p>Seed-borne pathogens represent a significant threat to agricultural productivity, causing billions of dollars in losses annually. These organisms can be broadly categorized into three groups:</p>

          <ul>
            <li><strong>Bacterial Pathogens:</strong> Including Escherichia coli, Salmonella spp., and Xanthomonas spp.</li>
            <li><strong>Fungal Pathogens:</strong> Such as Fusarium spp., Alternaria spp., and Rhizoctonia spp.</li>
            <li><strong>Viral Pathogens:</strong> Including tobacco mosaic virus and cucumber mosaic virus</li>
          </ul>

          <p>The evidence clearly demonstrates that effective pathogen control without chemicals is not only possible but preferable in many applications. Plasma treatment's multi-target mechanism, rapid action, and selective effectiveness make it an ideal solution for modern agriculture's pathogen control challenges.</p>
        `,
        author: 'GrowLuma Research Team',
        category: 'Research',
        tags: ['Pathogen Control', 'Research', 'Seed Health', 'Innovation'],
        image: 'https://cdn.abacus.ai/images/0308afea-e123-44bf-a109-ea97cb0347e5.png',
        featured: false,
        readTime: '7 min read',
        published: true
      }
    ];

    // Create blog posts
    for (const postData of blogPosts) {
      const existingPost = await prisma.blogPost.findUnique({
        where: { slug: postData.slug }
      });

      if (!existingPost) {
        await prisma.blogPost.create({
          data: postData
        });
        console.log(`✅ Created blog post: ${postData.title}`);
      } else {
        console.log(`⏭️  Blog post already exists: ${postData.title}`);
      }
    }

    // Create sample newsletter subscribers
    const sampleSubscribers = [
      'demo@example.com',
      'test@growluma.com',
      'sample@agriculture.com'
    ];

    for (const email of sampleSubscribers) {
      const existingSubscriber = await prisma.newsletter.findUnique({
        where: { email }
      });

      if (!existingSubscriber) {
        await prisma.newsletter.create({
          data: { email }
        });
        console.log(`✅ Created newsletter subscriber: ${email}`);
      }
    }

    // Log successful seeding
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'Database seeded successfully',
        data: {
          blogPosts: blogPosts.length,
          newsletterSubscribers: sampleSubscribers.length
        },
        source: 'seed_script'
      }
    });

    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    
    // Log seeding error
    try {
      await prisma.systemLog.create({
        data: {
          level: 'error',
          message: 'Database seeding failed',
          data: { error: error instanceof Error ? error.message : 'Unknown error' },
          source: 'seed_script'
        }
      });
    } catch (logError) {
      console.error('Failed to log seeding error:', logError);
    }
    
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
