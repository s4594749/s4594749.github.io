document.addEventListener('DOMContentLoaded', function() {
  function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
  }

  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  if (link1) {
    link1.addEventListener('click', () => {
      scrollToElement('.header');
    });
  }

  if (link2) {
    link2.addEventListener('click', () => {
      scrollToElement('.header', 1);
    });
  }

  if (link3) {
    link3.addEventListener('click', () => {
      scrollToElement('.column');
    });
  }

  const downloadButton = document.getElementById('downloadButton');
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = 'downloads/resume.pdf';  // Path to your PDF file
      link.download = 'downloads/resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});