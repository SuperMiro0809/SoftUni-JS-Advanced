(function() { // iife

    return {
        add:(v1, v2) => {
           return [v1[0] + v2[0],v1[1] + v2[1]];
        },
        multiply:(v, scalar) => {
            return [v[0] * scalar, v[1] * scalar];
        },
        length: (v) => {
            return Math.sqrt(v[0] ** 2 +  v[1] ** 2);
        },
        dot:(v1, v2) => {
            return v1[0] * v2[0] + v1[1] * v2[1];
        },
        cross:(v1, v2) => {
            return v1[0] * v2[1] - v1[1] * v2[0];
        }
    }
    
}()) //извиква веднага функцията


