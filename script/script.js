const globalCardsData = {
    cards: [
        {
            id: 1,
            image: "./img/news_image01.jpg",
            design: "Kitchan Design",
            heading: "Let’s Get Solution For Building Construction Work",
            timing: "26 December,2022",
        },
        {
            id: 2,
            image: "img/news_image02.jpg",
            design: "Living Design",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            timing: "22 December,2022",
        },
        {
            id: 3,
            image: "img/news_image03.jpg",
            design: "Interior Design",
            heading: "Best For Any Office & Business Interior Solution",
            timing: "25 December,2022",
        },
        {
            id: 4,
            image: "img/news_image04.jpg",
            design: "Kitchan Design",
            heading: "Let’s Get Solution For Building Construction Work",
            timing: "26 December,2022",
        },
        {
            id: 5,
            image: "img/news_image05.jpg",
            design: "Living Design",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            timing: "22 December,2022",
        },
        {
            id: 6,
            image: "img/news_image06.jpg",
            design: "Interior Design",
            heading: "Best For Any Office & Business Interior Solution",
            timing: "25 December,2022",
        },
    ],
};

Vue.component("page-header", {
    template: `
<header class="header center">
  <div class="header__logo">
    <img src="img/Logo.svg" alt="logo" />
    <p class="logo__text">Interno</p>
  </div>
  <div class="header__menu">
    <a class="header__link" href="index.html">Home</a>
    <a class="header__link" href="project.html">Project</a>
    <a class="header__link" href="blog.html">Blog</a>
  </div>
</header>`,
});

Vue.component("main__banner", {
    template: `
<section class="baner center">
  <div class="baner__wrap">
    <div class="baner__wrap-content">
      <h1 class="baner__title">Let Your Home Be Unique</h1>
      <p class="baner__text">
        There are many variations of the passages of lorem Ipsum
        fromavailable, majority.
      </p>
      <a href="#" class="baner__button">
        <div class="baner__button-text">
          <p>Get Started</p>
          <img src="img/arrowLeft.svg" alt="arrowLeft" />
        </div>
      </a>
    </div>
  </div>
</section>`,
});

Vue.component("banner", {
    props: ["image", "box", "head", "text"],
    template: `
<section class="banner center" :style="{backgroundImage:'url(' + image + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}">
      <div v-if="box" class="banner__intro">
        <h1 class="banner__intro-title">{{head}}</h1>
        <p class="banner__intro-text">{{text}}</p>
      </div>
</section>`,
});

var main__project = {
    template: `
  <section class="project center">
    <h2 class="project__title">Follow Our Projects</h2>
    <p class="project__text">
      It is a long established fact that a reader will be distracted by the of
      readable content of page lookings at its layouts points.
    </p>
    <div class="project__item-wrap">
      <div class="project__item">
        <img src="img/image01.jpg" alt="main" class="project__item-img-1" />
        <div class="project__item-content">
          <div class="project__text-wrap">
            <h2 class="project__item-title">Modern Kitchan</h2>
            <p class="project__item-text">Decor / Artchitecture</p>
          </div>
          <div class="project__arrow">
            <img src="img/arrowSimple.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="project__item">
        <img
          src="img/image02.jpg"
          alt="image 2"
          class="project__item-img-2"
        />
        <div class="project__item-content">
          <div class="project__text-wrap">
            <h2 class="project__item-title">Modern Kitchan</h2>
            <p class="project__item-text">Decor / Artchitecture</p>
          </div>
          <div class="project__arrow">
            <img src="img/arrowSimple.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="project__item">
        <img
          src="img/image03.jpg"
          alt="image 3"
          class="project__item-img-3"
        />
        <div class="project__item-content">
          <div class="project__text-wrap">
            <h2 class="project__item-title">Modern Kitchan</h2>
            <p class="project__item-text">Decor / Artchitecture</p>
          </div>
          <div class="project__arrow">
            <img src="img/arrowSimple.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="project__item">
        <img
          src="img/image04.jpg"
          alt="image 4"
          class="project__item-img-4"
        />
        <div class="project__item-content">
          <div class="project__text-wrap">
            <h2 class="project__item-title">Modern Kitchan</h2>
            <p class="project__item-text">Decor / Artchitecture</p>
          </div>
          <div class="project__arrow">
            <img src="img/arrowSimple.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    `,
};

var main__counter = {
    template: `
  <section class="counter center">
    <div class="counter__wrap">
      <div class="counter__item">
        <h2 class="counter__item-title">12</h2>
        <p class="counter__item-text">Years Of Experiance</p>
      </div>
      <div class="counter__item">
        <h2 class="counter__item-title">85</h2>
        <p class="counter__item-text">Success Project</p>
      </div>
      <div class="counter__item">
        <h2 class="counter__item-title">15</h2>
        <p class="counter__item-text">Active Project</p>
      </div>
      <div class="counter__item">
        <h2 class="counter__item-title">95</h2>
        <p class="counter__item-text">Happy CUstomers</p>
      </div>
    </div>
  </section>
    `,
};

Vue.component("page-footer", {
    template: `    
<footer class="footer center">
  <div class="footer__logo">
    <div class="header__logo">
      <img src="img/Logo.svg" alt="logo" />
    <p class="logo__text">Interno</p>
    </div>
    <p class="footer__logo-text">
      It is a long established fact that a reader will be distracted
      lookings.
    </p>
    <div class="footer__logo-icon">
      <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
          fill="#292F36"
        />
      </svg>
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
          fill="#292F36"
        />
      </svg>
    </div>
  </div>
  <div class="footer__menu">
    <p class="footer__menu-title">Pages</p>
    <a class="footer__menu-link" href="index.html">Home</a>
    <a class="footer__menu-link" href="project.html">Project</a>
    <a class="footer__menu-link" href="blog.html">Blog</a>
  </div>
  <div class="footer__services"></div>
  <div class="footer__contact">
    <p class="footer__contact-title">Contact</p>
    <p class="footer__contact-text">
      55 East Birchwood Ave. Brooklyn, New York 11201
    </p>
    <p class="footer__contact-text-email">contact@interno.com</p>
    <p class="footer__contact-text">(123) 456 - 7890</p>
  </div>
</footer>`,
});

Vue.component("product", {
    props: ["image", "design", "heading", "timing"],
    template: `
  <div class="blog__item">
    <div class="blog__item-image">
      <img :src="image" :alt="image" />
      <p class="blog__img-text">{{design}}</p>
    </div>
    <h2 class="blog__item-title">
        {{heading}}
    </h2>
    <div class="blog__wrap-text">
      <p class="blog__item-text">{{timing}}</p>
      <div class="blog__img">
        <img src="img/arrowSimple.svg" alt="row_left_blog" />
      </div>
    </div>
  </div>
      `,
});

Vue.component("products_small", {
    data() {
        return globalCardsData;
    },
    props: ["counter"],
    template: `
  <div class="blog__items">
      <product v-for="(card, index) in cards.slice(0, 3)" :key="card.id" :image="card.image" :design="card.design" :heading="card.heading" :timing="card.timing" :class="{ 'blog__item-select': index === 1 }"></product>
  </div>
          `,
});

Vue.component("products_all", {
    data() {
        return globalCardsData;
    },
    props: ["counter"],
    template: `
  <div class="blog__items" >
    <product v-for="(card, index) in cards" :key="card.id" :image="card.image" :design="card.design" :heading="card.heading" :timing="card.timing" :class="{ 'blog__item-select': index === 1 }"></product>
  </div>
          `,
});

Vue.component("main_article_and_news", {
    data() {
        return globalCardsData;
    },
    props: ["counter"],
    template: `
<section class="blog center">
  <h2 class="blog__title">Articles & News</h2>
  <p class="blog__text">
    It is a long established fact that a reader will be distracted by the of
    readable content of a page when lookings at its layouts the points of
    using.
  </p>
  <products_small></products_small>
  </div>
</section>
        `,
});

Vue.component("blog_article_and_news", {
    data() {
        return globalCardsData;
    },
    props: ["counter"],
    template: `
<section class="blog center">
  <h2 class="blog__title">Articles & News</h2>
  <p class="blog__text">
    It is a long established fact that a reader will be distracted by the of
    readable content of a page when lookings at its layouts the points of
    using.
  </p>
<products_all></products_all>
</section>
          `,
});

Vue.component("tagsbox", {
    data() {
        return {
            sortParam: "",
            articles: articles,
            activeIndex: -1,
        };
    },
    computed: {
        getTags() {
            let output = [];
            for (let i = 0; i < articles.length; ++i) {
                if (!output.includes(articles[i]["tag"])) {
                    output.push(articles[i]["tag"]);
                }
            }
            return output;
        },
        filteredList() {
            if (this.sortParam === "") return this.articles;
            else return this.articles.filter((a) => a.tag === this.sortParam);
        },
    },
    methods: {
        selectTag(id) {
            this.activeIndex = id;
            console.log(this.activeIndex);
        },
    },

    template: `
<section class="content center">
  <div class="articles">
    <div class="blogarticle" v-for="(blogarticle, index) in filteredList" :key="index">   
      <h2 class="blogarticle__header">{{blogarticle.header}}</h2>
        <div class="blogarticle__illustration">
          <img :src="blogarticle.picture"
              :alt="blogarticle.picture"
                class="blogarticle__image"
              />
        </div>
      <div class="blogarticle__subscript">
        <p class="blogarticle__date">{{blogarticle.date}}</p>
        <p class="blogarticle__info">{{blogarticle.info}}</p>
      </div>
      <div class="blogarticle__content" v-html="blogarticle.text">
      </div>
      <div class="blogarticle__divider">
        <p class="divider__sign">”</p>
        <p class="divider__text">
          The details are not the details. They make the design.
        </p>
      </div>
    </div>
  </div>
  <div class="tags">
  <h2 class="tags__header">Tags</h2>
    <div class="tags__container">
      <button v-for="(tag, index) in getTags" :key="index" :class="{ active: activeIndex === index }"
       @click="sortParam=tag, selectTag(index)" class="tags__item" >{{tag}}</button>
    </div>
  </div>
</section>
        `,
});

// Часть 2. Задание Vue

// Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

// Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

// Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

// В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

// Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".

Vue.component("ProductDetails", {
    data() {
        return {
            product: {
                name: "Pineapple",
                price: 99.99,
                available: true,
            },
        };
    },
    computed: {
        formattedPrice: function () {
            return `$${this.product.price}`;
        },
    },
    template: `
  <div>
      <p>name: {{ product.name }}</p>
      <p>price: {{ formattedPrice }}</p>
      <p v-if="product.available">Available</p>
      <p v-else>Out of stock</p>
  </div>
  `,
});

new Vue({
    el: "#app1",
    data: {},
    components: {
        // main__banner: main__banner,
        main__project: main__project,
        main__counter: main__counter,
    },
});
new Vue({
    el: "#app2",
    data: {
        sorttag: "",
        articles: articles,
    },
});
new Vue({
    el: "#app3",
});
// new Vue({
//     el: "#app4",
// });
