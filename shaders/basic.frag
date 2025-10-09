#version 330

out vec4 f_color;

uniform float CenterX;   // x del centro del objeto en NDC, en [-1, 1]

void main() {
    // Mapear [-1, 1] -> [0, 1]
    float t = clamp(CenterX * 0.5 + 0.5, 0.0, 1.0);

    // Suavizar transición
    t = smoothstep(0.0, 1.0, t);

    // Azul a la izquierda (t=0), Rojo a la derecha (t=1)
    vec3 blue = vec3(0.0, 0.0, 1.0);
    vec3 red  = vec3(1.0, 0.0, 0.0);
    vec3 col  = mix(blue, red, t);

    f_color = vec4(col, 1.0);
}