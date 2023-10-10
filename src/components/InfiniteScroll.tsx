function InfiniteScroll() {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <>
      <div className="scroller">
        <ul className="scroll-list1 scroller_inner">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </div>

      <div className="scroller">
        <ul className="scroll-list scroller_inner">
          <li>
            <img className="school-img" src="public/4.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/1.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/3.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/5.png" alt="" />
          </li>
          <li>
            <img className="school-img" src="public/2.png" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfiniteScroll;
