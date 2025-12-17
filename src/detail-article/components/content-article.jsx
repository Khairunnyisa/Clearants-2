export default function ContentArticle() {
  return (
    <section className="w-full bg-white">
      {/* ARTICLE CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-14 pb-24">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            elit consequat morbi arcu id. Nibh tincidunt penatibus lobortis
            pretium vel nibh quis. Blandit et pulvinar quis mi scelerisque magna
            congue. Sed lorem est et tincidunt. Molestie massa vestibulum ac
            vitae velit tellus turpis. Facilisi nisi, turpis bibendum magnis in.
            Sit nibh porttitor vulputate tempor consectetur consectetur lacus,
            vitae. Mi proin eget sit gravida. Nunc nibh convallis imperdiet
            sodales. Consequat viverra ornare sapien suspendisse ultrices odio
            felis est. Enim quis augue massa erat nullam nullam vitae nascetur
            id. Bibendum nunc vitae placerat lectus massa massa. Urna, tempor
            iaculis tortor quam. Pretium blandit id id ipsum morbi purus, elit
            proin non. Eros, magna diam ut a massa non. Et, amet velit iaculis
            etiam. Tincidunt vulputate etiam gravida sit duis. Aliquet tempus,
            ultricies sapien elementum hac odio nec. Velit purus scelerisque
            orci, arcu cras elit tortor cursus. Morbi sem non tristique auctor.
            Montes, penatibus purus tempor pellentesque mi nisl consequat neque
            lobortis. Viverra faucibus dolor aliquet nisi, commodo sit purus
            proin eu. Nisi at congue ipsum, lectus pharetra duis at tempor
            purus. Sit dignissim aliquet auctor molestie in. Et cursus sed sem
            vel ipsum massa at. Malesuada gravida habitasse fermentum, tellus.
            Tempus congue ut malesuada pharetra, nisl, non in nam ipsum. Dolor,
            varius vel molestie cum. In risus vivamus at proin egestas. Lorem
            interdum sed vestibulum lorem euismod. Tincidunt sit massa risus
            nullam nunc, diam rhoncus. Risus convallis ac ipsum quam sit.
            Adipiscing habitasse consequat augue adipiscing est. Mollis
            condimentum ac purus nibh. Pharetra tincidunt neque sed pulvinar mi.
            Sed mauris, risus odio semper. Vel tempus mauris tincidunt fermentum
            mauris. Sit vitae tincidunt leo, euismod et elit dapibus. Justo,
            facilisis lectus sit sit sit. Fermentum nunc neque cursus nunc
            elementum mattis accumsan.
          </p>
        </div>

        {/* GAMBAR DI BAWAH ARTICLE */}
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200"
            alt="Article Illustration"
            className="w-full object-cover"
          />
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mt-10"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            Proin at egestas magnis turpis. Lectus sit ultrices diam adipiscing
            consequat, pretium non massa. Adipiscing sem sed aliquam nec orci
            feugiat tincidunt quis laoreet. Risus adipiscing venenatis sapien in
            sed adipiscing aliquet id velit. Urna, diam amet, nisl porta. Eget
            odio eu tortor porttitor aliquet purus et. Vitae est amet nisi
            volutpat. Urna dictum ac massa non neque, sollicitudin nisi. Felis
            aliquet mauris nisi sed fermentum at. Iaculis scelerisque egestas
            nunc ultrices elit mus. Vel tristique vestibulum etiam tempus, leo
            semper mauris nisl tincidunt. Gravida elementum blandit eget hac
            amet est, non, amet. Interdum lectus mattis at turpis odio.
          </p>
        </div>
      </div>
    </section>
  );
}
