$( document ).ready( function () {
    const banner = document.getElementById('banner'),
        nav = document.getElementById('navigation');
    $( '#toggle' ).on( 'click', function () {
        banner.classList.toggle( 'active' );
        nav.classList.toggle( 'active' );
    } )
});
