
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    slug: 'plasma-technology-agriculture-revolution',
    title: 'How Plasma Technology is Revolutionizing Agriculture',
    excerpt: 'Discover the science behind nonthermal plasma and its transformative impact on seed treatment and agricultural sustainability.',
    author: 'Seth McQuillan',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['Plasma', 'Agriculture', 'Innovation', 'Sustainability'],
    image: 'https://cdn.abacus.ai/images/2cd18140-5bbd-419a-bc21-0c3d4416f911.png',
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

      <h2>Environmental and Economic Benefits</h2>

      <p>The environmental advantages of plasma seed treatment are substantial. By eliminating the need for chemical fungicides and pesticides, plasma treatment reduces agricultural runoff, soil contamination, and potential harm to beneficial organisms. This aligns perfectly with sustainable agriculture goals and organic certification requirements.</p>

      <p>From an economic perspective, plasma treatment offers compelling value propositions:</p>

      <ul>
        <li>Reduced chemical input costs</li>
        <li>Improved crop stands and yields</li>
        <li>Lower replanting rates due to enhanced uniformity</li>
        <li>Premium pricing opportunities for chemical-free produce</li>
        <li>Reduced regulatory compliance costs</li>
      </ul>

      <h2>Scientific Evidence and Field Results</h2>

      <p>Extensive research validates the efficacy of plasma seed treatment across diverse crop types. Laboratory studies consistently demonstrate 2-3 log reductions in pathogen populations, while field trials show 15-25% improvements in germination rates and emergence uniformity.</p>

      <p>Recent multi-location trials on corn, soybeans, and leafy greens have confirmed these laboratory results in commercial production settings. Treated seeds show faster emergence, improved stand establishment, and enhanced early-season vigor that translates to measurable yield improvements.</p>

      <h2>The Future of Plasma Agriculture</h2>

      <p>As plasma technology continues to mature, we anticipate expanded applications including post-harvest produce treatment, greenhouse air sanitation, and soil microbiome modification. The technology's versatility and chemical-free nature position it as a cornerstone of future sustainable agriculture systems.</p>

      <p>The convergence of environmental necessity, technological advancement, and economic opportunity makes plasma seed treatment not just an innovation, but an imperative for the future of agriculture. As we face mounting challenges from climate change, population growth, and resource constraints, technologies like plasma treatment offer hope for sustainable intensification of agricultural production.</p>

      <h2>Conclusion</h2>

      <p>Plasma technology represents more than just another seed treatment option—it embodies a fundamental shift toward physics-based, environmentally benign agricultural solutions. As adoption increases and technology costs decrease, plasma treatment is poised to become a standard practice in modern agriculture, supporting both productivity and sustainability goals.</p>

      <p>For growers, researchers, and industry stakeholders, the question is not whether plasma technology will transform agriculture, but how quickly they can adapt to harness its revolutionary potential.</p>
    `
  },
  {
    id: 2,
    slug: 'sustainable-seed-treatment-future',
    title: 'The Future of Sustainable Seed Treatment',
    excerpt: 'Exploring how chemical-free seed treatment technologies are shaping the future of sustainable agriculture.',
    author: 'Noah [Last name TBD]',
    date: '2024-03-08',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Sustainability', 'Seed Treatment', 'Environment', 'Future'],
    image: 'https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg',
    content: `
      <p>As agriculture faces mounting pressure to reduce chemical inputs while maintaining productivity, sustainable seed treatment technologies are emerging as critical solutions for the industry's future. The traditional reliance on chemical fungicides and pesticides for seed protection is being challenged by innovative approaches that deliver superior results without environmental compromise.</p>

      <h2>The Sustainability Challenge</h2>

      <p>Modern agriculture stands at a crossroads. Consumer demand for chemical-free food continues to grow, while regulatory agencies worldwide tighten restrictions on synthetic pesticides. Simultaneously, climate change intensifies pathogen pressure and creates more challenging growing conditions. This convergence of factors demands innovative solutions that can deliver crop protection without environmental costs.</p>

      <p>Traditional seed treatment methods, while effective, carry significant drawbacks:</p>

      <ul>
        <li>Chemical residues that persist in soil and water systems</li>
        <li>Development of pathogen resistance to active ingredients</li>
        <li>Negative impacts on beneficial soil microorganisms</li>
        <li>Regulatory restrictions limiting available chemistries</li>
        <li>Consumer concerns about food safety</li>
      </ul>

      <h2>Emerging Technologies</h2>

      <p>The future of seed treatment lies in physical and biological approaches that eliminate chemical dependencies. Leading technologies include:</p>

      <h3>Plasma Treatment</h3>
      <p>Nonthermal plasma technology uses ionized gas to eliminate pathogens and enhance seed performance. This approach offers broad-spectrum pathogen control without chemical residues, making it compatible with organic and sustainable production systems.</p>

      <h3>UV Treatment</h3>
      <p>Ultraviolet light treatment provides surface sterilization through DNA damage to pathogens. While effective for surface-borne pathogens, UV treatment has limitations for deeply embedded organisms.</p>

      <h3>Biological Controls</h3>
      <p>Beneficial microorganisms can provide seed protection through competitive exclusion and induced resistance. These approaches align with regenerative agriculture principles but may have consistency challenges.</p>

      <h3>Heat Treatment</h3>
      <p>Controlled heat application can eliminate pathogens while preserving seed viability. However, this approach requires careful temperature and timing control to avoid seed damage.</p>

      <h2>Market Drivers and Adoption</h2>

      <p>Several key factors are accelerating the adoption of sustainable seed treatment technologies:</p>

      <ul>
        <li><strong>Regulatory Pressure:</strong> Increasing restrictions on chemical pesticides drive demand for alternatives</li>
        <li><strong>Consumer Demand:</strong> Growing market for organic and chemical-free products</li>
        <li><strong>Sustainability Goals:</strong> Corporate commitments to environmental stewardship</li>
        <li><strong>Economic Benefits:</strong> Reduced input costs and premium pricing opportunities</li>
        <li><strong>Certification Requirements:</strong> Organic and sustainable certification standards</li>
      </ul>

      <h2>Implementation Challenges</h2>

      <p>Despite their promise, sustainable seed treatment technologies face several adoption challenges:</p>

      <ul>
        <li>Capital investment requirements for new equipment</li>
        <li>Need for operator training and protocol development</li>
        <li>Integration with existing seed processing workflows</li>
        <li>Validation of efficacy across diverse conditions</li>
        <li>Scaling production to commercial volumes</li>
      </ul>

      <h2>The Path Forward</h2>

      <p>Successful transition to sustainable seed treatment requires a collaborative approach involving:</p>

      <ul>
        <li><strong>Research Institutions:</strong> Continuing technology development and validation</li>
        <li><strong>Industry Partners:</strong> Equipment manufacturing and commercialization</li>
        <li><strong>Growers:</strong> Pilot testing and feedback on practical applications</li>
        <li><strong>Regulators:</strong> Framework development for new technology approval</li>
        <li><strong>Retailers:</strong> Market development for sustainably produced crops</li>
      </ul>

      <h2>Looking Ahead</h2>

      <p>The future of seed treatment will be defined by technologies that can deliver superior performance while supporting environmental and social sustainability goals. Plasma treatment, with its proven efficacy and chemical-free approach, is positioned to lead this transformation.</p>

      <p>As we move toward 2030 and beyond, sustainable seed treatment technologies will become increasingly mainstream, driven by regulatory requirements, market demand, and the compelling economics of chemical-free production systems. The agricultural industry that embraces these innovations today will be best positioned for tomorrow's challenges and opportunities.</p>

      <p>The transition to sustainable seed treatment is not just an environmental imperative—it's a business opportunity that aligns profitability with responsibility, creating value for growers, consumers, and the planet.</p>
    `
  },
  {
    id: 3,
    slug: 'pathogen-control-without-chemicals',
    title: 'Effective Pathogen Control Without Chemicals',
    excerpt: 'Learn how plasma treatment achieves superior pathogen elimination while maintaining seed health and viability.',
    author: 'GrowLuma Research Team',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Research',
    tags: ['Pathogen Control', 'Research', 'Seed Health', 'Innovation'],
    image: 'https://cdn.abacus.ai/images/0308afea-e123-44bf-a109-ea97cb0347e5.png',
    content: `
      <p>Traditional chemical seed treatments have long been the standard for pathogen control in agriculture. However, mounting concerns about environmental impact, regulatory restrictions, and pathogen resistance have created urgent demand for alternative approaches. Plasma treatment technology offers a revolutionary solution that achieves superior pathogen elimination without chemical inputs or residues.</p>

      <h2>Understanding Pathogen Challenges</h2>

      <p>Seed-borne pathogens represent a significant threat to agricultural productivity, causing billions of dollars in losses annually. These organisms can be broadly categorized into three groups:</p>

      <ul>
        <li><strong>Bacterial Pathogens:</strong> Including Escherichia coli, Salmonella spp., and Xanthomonas spp.</li>
        <li><strong>Fungal Pathogens:</strong> Such as Fusarium spp., Alternaria spp., and Rhizoctonia spp.</li>
        <li><strong>Viral Pathogens:</strong> Including tobacco mosaic virus and cucumber mosaic virus</li>
      </ul>

      <p>These pathogens can survive on seed surfaces or within seed tissues, remaining dormant until favorable conditions trigger infection. Traditional control methods rely on broad-spectrum fungicides and bactericides that may have unintended consequences for beneficial microorganisms and environmental health.</p>

      <h2>Mechanisms of Plasma Pathogen Control</h2>

      <p>Nonthermal plasma achieves pathogen elimination through multiple simultaneous mechanisms, creating a multi-target approach that prevents resistance development:</p>

      <h3>Oxidative Damage</h3>
      <p>Plasma generates highly reactive oxygen species (ROS) including hydroxyl radicals, atomic oxygen, and ozone. These species cause irreversible oxidative damage to pathogen cell walls, membranes, and intracellular components.</p>

      <h3>DNA/RNA Disruption</h3>
      <p>Reactive species can penetrate cellular structures and cause strand breaks in nucleic acids, preventing pathogen replication and survival.</p>

      <h3>Protein Denaturation</h3>
      <p>Plasma treatment denatures essential proteins and enzymes, disrupting critical metabolic processes necessary for pathogen survival.</p>

      <h3>Membrane Permeabilization</h3>
      <p>Reactive species create pores in cellular membranes, leading to osmotic imbalance and cell death.</p>

      <h2>Efficacy Against Diverse Pathogens</h2>

      <p>Extensive research demonstrates plasma treatment's effectiveness against a broad spectrum of seed-borne pathogens:</p>

      <h3>Bacterial Control</h3>
      <p>Laboratory studies show 4-6 log reductions in bacterial populations on treated seeds. Gram-positive and gram-negative bacteria respond similarly to plasma treatment, with typical 99.99% elimination rates achieved in 2-5 minutes of exposure.</p>

      <h3>Fungal Elimination</h3>
      <p>Fungal spores, often more resistant than vegetative bacterial cells, still show 2-4 log reductions with optimized plasma treatment. The multi-target mechanism effectively disrupts spore structures and prevents germination.</p>

      <h3>Viral Inactivation</h3>
      <p>While less extensively studied, preliminary research indicates plasma treatment can inactivate enveloped and non-enveloped viruses through capsid protein damage and nucleic acid disruption.</p>

      <h2>Selective Pathogen Elimination</h2>

      <p>One of plasma treatment's most significant advantages is its selectivity—the ability to eliminate harmful pathogens while preserving beneficial microorganisms and seed viability. This selectivity results from:</p>

      <ul>
        <li><strong>Differential Sensitivity:</strong> Pathogenic organisms are often more susceptible to oxidative stress than plant tissues</li>
        <li><strong>Controlled Exposure:</strong> Precise treatment parameters can be optimized for pathogen elimination without seed damage</li>
        <li><strong>Surface Focus:</strong> Plasma primarily affects surface-associated pathogens, preserving internal seed structures</li>
        <li><strong>Rapid Treatment:</strong> Short exposure times minimize impact on seed physiology while maximizing pathogen control</li>
      </ul>

      <h2>Advantages Over Chemical Treatments</h2>

      <p>Plasma pathogen control offers several key advantages compared to traditional chemical approaches:</p>

      <table>
        <tr>
          <th>Factor</th>
          <th>Plasma Treatment</th>
          <th>Chemical Treatment</th>
        </tr>
        <tr>
          <td>Environmental Impact</td>
          <td>No residues or environmental persistence</td>
          <td>Persistent chemicals in soil and water</td>
        </tr>
        <tr>
          <td>Resistance Development</td>
          <td>Multiple mechanisms prevent resistance</td>
          <td>Single-target approaches promote resistance</td>
        </tr>
        <tr>
          <td>Beneficial Organisms</td>
          <td>Selective elimination preserves beneficial microbes</td>
          <td>Broad-spectrum activity kills beneficial organisms</td>
        </tr>
        <tr>
          <td>Regulatory Approval</td>
          <td>Physical process with minimal regulatory barriers</td>
          <td>Extensive testing and registration requirements</td>
        </tr>
        <tr>
          <td>Processing Time</td>
          <td>Rapid treatment (seconds to minutes)</td>
          <td>May require extended contact times</td>
        </tr>
      </table>

      <h2>Field Performance and Results</h2>

      <p>Commercial-scale trials demonstrate plasma treatment's effectiveness under real-world conditions:</p>

      <ul>
        <li><strong>Corn Trials:</strong> 95% reduction in Fusarium spp. with corresponding 18% improvement in emergence uniformity</li>
        <li><strong>Soybean Studies:</strong> 98% elimination of bacterial pathogens with 15% increase in germination rates</li>
        <li><strong>Lettuce Evaluation:</strong> 99% reduction in Salmonella contamination with improved transplant success</li>
      </ul>

      <h2>Implementation Considerations</h2>

      <p>Successful implementation of plasma pathogen control requires attention to several key factors:</p>

      <h3>Treatment Optimization</h3>
      <p>Each crop and pathogen combination requires optimized parameters including voltage, frequency, treatment time, and gas composition.</p>

      <h3>Quality Assurance</h3>
      <p>Regular monitoring of treatment efficacy through pathogen testing ensures consistent performance.</p>

      <h3>Integration</h3>
      <p>Plasma treatment must be integrated into existing seed processing workflows without disrupting operations.</p>

      <h3>Safety Protocols</h3>
      <p>Proper safety systems and operator training ensure safe handling of high-voltage equipment.</p>

      <h2>Future Developments</h2>

      <p>Ongoing research continues to expand plasma treatment capabilities:</p>

      <ul>
        <li>Enhanced penetration techniques for internally seed-borne pathogens</li>
        <li>Combination treatments with biological controls</li>
        <li>Real-time pathogen detection and treatment adjustment</li>
        <li>Atmospheric pressure plasma sources for improved scalability</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Plasma treatment represents a paradigm shift in pathogen control, offering superior efficacy without the environmental and resistance concerns associated with chemical treatments. As agriculture continues to evolve toward sustainable practices, plasma technology provides a powerful tool for maintaining crop protection standards while supporting environmental stewardship goals.</p>

      <p>The evidence clearly demonstrates that effective pathogen control without chemicals is not only possible but preferable in many applications. Plasma treatment's multi-target mechanism, rapid action, and selective effectiveness make it an ideal solution for modern agriculture's pathogen control challenges.</p>
    `
  }
];

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-luma-green hover:text-green-700 hover:bg-luma-green/5 mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <Badge className="bg-luma-green text-white">{post.category}</Badge>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">By {post.author}</span>
              </div>
              
              <Button variant="outline" size="sm" className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="hover:bg-luma-green hover:text-white cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-luma-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-12 w-12 text-luma-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                  {post.author === 'Seth McQuillan' && (
                    <p className="text-gray-600 leading-relaxed">
                      Seth is the founder of GrowLuma and holds a degree in Electrical Engineering from Western Michigan University. 
                      He specializes in DBD reactor design and leads the technical development of LUMA's plasma treatment systems. 
                      Seth is passionate about applying innovative physics solutions to agricultural challenges.
                    </p>
                  )}
                  {post.author === 'Noah [Last name TBD]' && (
                    <p className="text-gray-600 leading-relaxed">
                      Noah is co-founder and head of operations at GrowLuma, leading treatment protocol development and field pilot programs. 
                      He brings extensive experience in agricultural operations and focuses on translating plasma technology into practical 
                      solutions for growers and seed producers.
                    </p>
                  )}
                  {post.author === 'GrowLuma Research Team' && (
                    <p className="text-gray-600 leading-relaxed">
                      The GrowLuma Research Team consists of engineers, plant scientists, and agricultural specialists dedicated to 
                      advancing plasma seed treatment technology. Our multidisciplinary approach combines cutting-edge physics with 
                      practical agricultural knowledge to deliver innovative solutions.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-lg text-gray-600">Continue exploring plasma technology and agricultural innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                      <Badge variant="outline" className="border-luma-blue text-luma-blue">
                        {relatedPost.category}
                      </Badge>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    
                    <CardTitle className="text-xl leading-tight hover:text-luma-green transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {relatedPost.excerpt}
                    </CardDescription>
                    
                    <Button variant="link" className="text-luma-green p-0" asChild>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Explore Plasma Seed Treatment?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our team to learn more about how plasma technology can benefit your agricultural operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/pricing">View System Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
