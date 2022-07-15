require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});

import './sass/main.scss'
import $ from 'jquery-ui'

$(() => {
    $("button").on("click", () => {
        $("button").toggleClass("active")
    })
})