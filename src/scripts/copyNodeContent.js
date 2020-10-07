import toggleClassInOneClick from './toggleClassInOneClick'

const copyNodeContent = (node, className)=> {
    const range = document.createRange()
    range.selectNode(node)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)

    if(node.innerHTML !== '') {
      document.execCommand('copy')
      window.getSelection().removeAllRanges()    
      toggleClassInOneClick(node,className)
    } else{
      alert('no content to copy')
    }

  }

  export default copyNodeContent