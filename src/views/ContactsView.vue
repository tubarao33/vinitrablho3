<template>
  <section class="container py-5">
    <div class="text-center mb-4">
      <h1 class="display-5 fw-bold">Contato</h1>
      <p class="text-muted">Fale conosco</p>
    </div>

    <!-- Entrada da UTFPR -->
    <div class="row justify-content-center mb-5">
      <div class="col-md-8 text-center">
        <img
          src="/utfpr-toledo.jpeg"
          alt="UTFPR Entrada"
          class="img-fluid rounded shadow"
          style="max-height: 350px; object-fit: cover"
        />
      </div>
    </div>

    <!-- Bloco e mapa -->
    <div class="row align-items-center justify-content-center g-4 mb-5">
      <div class="col-md-6 text-center">
        <img
          src="/images.jpeg"
          alt="Bloco UTFPR"
          class="img-fluid rounded shadow w-100"
          style="height: 350px; object-fit: cover"
        />
      </div>
      <div class="col-md-6 text-center">
        <h5 class="fw-semibold mb-3">Localização</h5>
        <iframe
          class="w-100 rounded shadow"
          height="350"
          style="object-fit: cover; border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.270707659006!2d-53.752!3d-24.724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3e9f6f164ec31%3A0x6a2f57b3a5b08cf0!2sUTFPR%20Toledo!5e0!3m2!1spt-BR!2sbr!4v123"
        ></iframe>
      </div>
    </div>

    <!-- Contato direto -->
    <div class="text-center mt-5">
      <p>Se você tiver dúvidas ou sugestões, entre em contato:</p>
      <p><strong>Email:</strong> vinicius@utfpr.edu.br</p>
      <p><strong>Telefone:</strong> (45) 99999-9999</p>
      <p><strong>Endereço:</strong> UTFPR - Campus Toledo, PR</p>

      <!-- Botão WhatsApp -->
      <a
        href="https://wa.me/459999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20projeto%20UTFPR."
        class="btn btn-success mt-3"
        target="_blank"
      >
        <i class="bi bi-whatsapp me-2"></i>Enviar mensagem no WhatsApp
      </a>
    </div>
  </section>
</template>
