<br />
<p align="center">
  <a href="https://dot-cherry.com">
    <img src="https://cdn.echodesktechnology.com/imgs/logos/Cherry-Logo.svg" width="400" height="320"> 
  </a>
</p>

<br />

<p align="center">
<img alt="Downloads" src="https://img.shields.io/npm/dw/dot-cherry">
<img alt="GitHub" src="https://img.shields.io/github/license/serverguyken/dot-cherry">
</p>




<h2><a id="user-content--installation" class="anchor" aria-hidden="true" href="#-installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><i></i> Installation</h2>

<p>Using npm:</p>
<div class="highlight highlight-source-shell"><pre>npm install dot-cherry</pre></div>

<hr>






```js
import $ from "../.Cherry/lib/";

const eligible = true;

function sayEligible() {
    console.log("You are eligible to vote!")
}
function sayIneligible() {
    console.log("You are not eligible to vote!")
}

$.switch(eligible, {
    true: sayEligible,
    false: sayIneligible,
    default: sayIneligible
})

```

<br>

# Introduction

**A modern JavaScript utility library.**


<br>

# Documentation

**Visit <a href="dot-cherry.com">dot-cherry.com</a> for docs**


<br>

# Contribution


**For now contribution are limited. If you are interested in contributing please make sure to email at <a href="mailto:serverguyken@gmail.com">Email</a>**

<br>

# Licence


<a href="https://github.com/Echodesk-Technology/serverguyken/blob/main/README.md"><h3>MIT</h3></a>

<h3>DotCherry is released under the MIT license & supports modern environments.</h3>

<br>

