const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texcoord;


#define NUM_OCTAVES 5

// create random
float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.98, 4.1414))) * 48.5453);
} 

// create noise
float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

// fractional brownian motion (cloud effect)
float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


void main(void)
{
    vec2 uv = v_texcoord;
    
    // colours
    vec4 color1 = vec4(1.0, 1.0, 1.0, 1.0);
    vec4 color2 = vec4(0.0, 0.0, 0.0, 1.0);
    
    // make a noise pattern
    float f = fbm(uv);  
    f *= 10.0;
    f += u_time * 0.2;
    f = fract(f);
    
    // mix colors based on noise pattern
    float mixer = smoothstep(0.0, 0.01, f);
 
    // final pixel color
    vec4 color = mix(color1, color2, mixer);
    
    gl_FragColor = color;
}





`;
