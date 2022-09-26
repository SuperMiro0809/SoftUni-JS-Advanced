function solve() {
  const a = Array.from(document.querySelectorAll('a'));
  const counters = a.map(el => el.nextElementSibling.innerText.split(' ')[1])
  const container = document.querySelector('#page1 > .middled');
  container.addEventListener('click', function(e) {
    const target = e.target;
    const parent = e.target.parentElement;
    const notTargetAnchor = target.localName !== 'a';
    const notTargetParentAnchor = (parent && parent.localName !== 'a'); 
    
    if(notTargetAnchor && notTargetParentAnchor) { return;}
    const targetAnchor = notTargetAnchor ? parent : target;
    const counterIndex = a.indexOf(targetAnchor);
    counters[counterIndex]++;
    const p = targetAnchor.nextElementSibling;
    p.innerText = `visited ${counters[counterIndex]} times`;
  })
  //TODO...
}