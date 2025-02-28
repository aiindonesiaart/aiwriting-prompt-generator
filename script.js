document.getElementById('category').addEventListener('change', function () {
  const category = this.value;
  const subcategorySection = document.getElementById('subcategory-section');
  const subcategoryDropdown = document.getElementById('subcategory');

  // Clear previous options
  subcategoryDropdown.innerHTML = '';

  if (category === 'copywriting') {
    subcategorySection.style.display = 'block';
    const subcategories = ['Blog Writing', 'Book Writing', 'Content Writing', 'Course Writing', 'Email Writing', 'Landing Pages'];
    subcategories.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub.toLowerCase().replace(/\s+/g, '-');
      option.textContent = sub;
      subcategoryDropdown.appendChild(option);
    });
  } else {
    subcategorySection.style.display = 'none';
  }
});

document.getElementById('subcategory').addEventListener('change', function () {
  const subcategory = this.value;
  const modelSection = document.getElementById('model-section');
  const modelDropdown = document.getElementById('model');

  // Clear previous options
  modelDropdown.innerHTML = '';

  if (subcategory === 'blog-writing') {
    modelSection.style.display = 'block';
    const models = [
      'Generate blog post titles',
      'Generate blog post descriptions',
      'Generate blog post outline',
      'Generate complete blog post from outline',
      'Generate complete blog post from topic',
      'Generate introduction using framework',
      'Generate paragraph of text'
    ];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.textContent = model;
      modelDropdown.appendChild(option);
    });
  } else {
    modelSection.style.display = 'none';
  }
});

document.getElementById('generate-prompt').addEventListener('click', function () {
  const category = document.getElementById('category').value;
  const subcategory = document.getElementById('subcategory').value;
  const model = document.getElementById('model').value;
  const voiceTone = document.getElementById('voice-tone').value;
  const writingStyle = document.getElementById('writing-style').value;
  const topic = document.getElementById('topic').value;
  const audience = document.getElementById('audience').value;
  const numOutputs = document.getElementById('num-outputs').value;

  // Construct the prompt
  const prompt = `Write ${numOutputs} ${model.split('-').join(' ')} about ${topic} for ${audience}. Use a ${voiceTone} tone and a ${writingStyle} style.`;

  // Display the prompt
  document.getElementById('output').value = prompt;
  document.getElementById('output-section').style.display = 'block';
});
