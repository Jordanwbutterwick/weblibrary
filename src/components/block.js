import styles from '../../styles/Home.module.css'

class TextToggleBlock extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {isToggleOn: true,
            texts : props.texts,
            details : props.details};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
        return (
        <div className={styles.textToggleBlock} onclick={this.handleClick}>
            <div className={styles.toggleText}  onclick={this.handleClick}>
              {this.state.texts.map((text) => (
                  <p className={styles.line} onclick={toggleHidden}>{text}</p>

              ))}
            </div>
            <div className={styles.detailsBlock}>
                {this.state.details.map((details) => (
                  <p className={styles.details}>{details}</p>
                
              ))}
            </div>
        </div>
        )
    }
}
  
  export default TextToggleBlock