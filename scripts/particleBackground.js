// custom settings for particle background from @author Marc Bruederlin <hello@marcbruederlin.com>
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    maxParticles: 100,
    responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 75,
        connectParticles: true
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 50,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 10,
        connectParticles: true
      }
    }
  ]

  });
};
