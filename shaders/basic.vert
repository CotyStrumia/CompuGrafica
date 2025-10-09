#version 330

in vec3 in_pos;

uniform mat4 Mvp;

void main(){ 
    gl_Position = Mvp * vec4(in_pos, 1.0); 
}
