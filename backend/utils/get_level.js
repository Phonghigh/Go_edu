export const get_level = (score) =>{
    if (score >=8) {
        return "Level1";
    }
    else if(score <8 && score >=6){
        return "Level2";
    }
    else if(score <6 && score >=4){
        return "Level3";
    }
    return "Level4";
}
