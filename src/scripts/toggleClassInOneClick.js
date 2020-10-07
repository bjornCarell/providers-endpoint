const toggleClassInOneClick = (node,className, time=1000) => {
    node.classList.add(`${className}`)

    setTimeout(() => {
      node.classList.remove(`${className}`)
    }, time);
}

export default toggleClassInOneClick