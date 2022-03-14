<script>
    let rand = -1

    function getRand(){
        fetch('./rand')
            .then(r => r.text())
            .then(d => (rand = d));
    }
</script>

<h1>Your number is: {rand}</h1>
<button on:click={getRand}>Get a random number</button>
