export const testimonials = [
  {
    quote: "Omg. I have never seen a designer this fast. We would discuss ideas, and the next day Karina would have MULTIPLE flows laid out, ready to be discussed and tweaked.",
    highlight: "Omg. I have never seen a designer this fast.",
    author: {
      name: "Laurent Baumann",
      role: "Chief Product Officer",
      avatar: "/people/laurent.png"
    }
  },
  {
    quote: "She always makes her product partners feel completely confident. She is great at jumping into projects at varying levels of ambiguity and quickly finds where she can add the most value.",
    highlight: "great at jumping into projects at varying levels of ambiguity",
    author: {
      name: "Anna Von Clemm",
      role: "Senior Product Manager",
      avatar: "/people/anna.png"
    }
  },
  {
    quote: "She brought the voice of the customer in all of our product design discussions and provided a great combination of speed and quality in her work I have rarely seen in designers.",
    highlight: "brought the voice of the customer",
    author: {
      name: "Javier Irigoyen R.",
      role: "Sr Group Product Manager",
      avatar: "/people/javier.png"
    }
  },
  {
    quote: "On top of providing first-class UX designs, she proactively bridged gaps between Product, Design and Development to ensure projects were successful–from writing requirements to providing code drafts for developers.",
    highlight: "bridged gaps between Product, Design and Development",
    author: {
      name: "Mike Viscariello",
      role: "Senior Product Manager",
      avatar: "/people/mikev.png"
    }
  }
] as const;


<SectionBlock size="small">
    <h2>What others say</h2>
    <div class="testimonials-grid">
      {testimonials.map(({ quote, highlight, author }) => (
        <div class="testimonial">
          <blockquote>
            <p>
              {quote.split(highlight).map((part, index, array) => (
                <>
                  {part}
                  {index < array.length - 1 && <strong>{highlight}</strong>}
                </>
              ))}
            </p>
            <footer>
              <div class="author">
                <img src={author.avatar} alt="" class="avatar" />
                <div>
                  <cite>{author.name}</cite>
                  <span>{author.role}</span>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
  </SectionBlock>