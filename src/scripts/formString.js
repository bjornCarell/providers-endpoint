const formString = (string, propJSON)=> {
    if(
        propJSON
        && propJSON !== 'financialInstitutionId' 
        && propJSON !== 'name' 
        && propJSON !== 'market'
        && propJSON !== 'passwordHelpText'
        && propJSON !== 'financialInstitutionName'
        ) {
        let noUnderscore = string.replace('_', ' ')
        return ' ' + noUnderscore.charAt(0).toUpperCase() + noUnderscore.slice(1).toLowerCase()
    } else {
        return string
    }
 }
 
export default formString