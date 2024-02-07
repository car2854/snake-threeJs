// [top,right,bottom,left]
let controls = [0,1,0,0];

const keyController = () => {
  document.addEventListener('keypress', (key) => {
    switch (key.key) {
      case 'w':
        if (controls[2] === 0){
          controls = [0,0,0,0];
          controls[0] = 1;
        }
        break;
      case 'd':
        if (controls[3] === 0){
          controls = [0,0,0,0];
          controls[1] = 1;
        }
        break;
        case 's':
          if (controls[0] === 0){
          controls = [0,0,0,0];
          controls[2] = 1
        }
        break;
        case 'a':
          if (controls[1] === 0){
          controls = [0,0,0,0];
          controls[3] = 1
        }
        break;
      default:
        break;
    }
  });
}


export {
  keyController,
  controls
}