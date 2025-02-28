document.getElementById('category').addEventListener('change', function () {
  const category = this.value;
  const subcategorySection = document.getElementById('subcategory-section');
  const subcategoryDropdown = document.getElementById('subcategory');

  // Clear previous options
  subcategoryDropdown.innerHTML = '';

  if (category === 'marketing') {
    subcategorySection.style.display = 'block';
    const subcategories = ['Framework', 'Miscellaneous'];
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

  if (subcategory === 'framework') {
    modelSection.style.display = 'block';
    const models = ['AIDA Framework', 'PAS Framework', 'BAB Framework', 'FAB Framework'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.textContent = model;
      modelDropdown.appendChild(option);
    });

    // Show "Describe Your Business" input
    document.getElementById('describe-business').style.display = 'block';
    document.getElementById('what-do-you-sell').style.display = 'none';
  } else if (subcategory === 'miscellaneous') {
    modelSection.style.display = 'block';
    const models = ['Create buyer personas', 'Create long form sales letter', 'Create video sales letter VSL'];
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase().replace(/\s+/g, '-');
      option.textContent = model;
      modelDropdown.appendChild(option);
    });

    // Show "What Do You Sell" input
    document.getElementById('describe-business').style.display = 'none';
    document.getElementById('what-do-you-sell').style.display = 'block';
  } else {
    modelSection.style.display = 'none';
    document.getElementById('describe-business').style.display = 'none';
    document.getElementById('what-do-you-sell').style.display = 'none';
  }
});

document.getElementById('generate-prompt').addEventListener('click', function () {
  const category = document.getElementById('category').value;
  const subcategory = document.getElementById('subcategory').value;
  const model = document.getElementById('model').value;
  const voiceTone = document.getElementById('voice-tone').value;
  const writingStyle = document.getElementById('writing-style').value;

  let topic, audience, prompt;

  if (subcategory === 'framework') {
    const businessDescription = document.getElementById('business-description').value;
    topic = `Using the ${model.split('-').join(' ')} for marketing`;
    audience = businessDescription;
    prompt = `Write a marketing strategy using the ${model.split('-').join(' ')} for ${audience}. Use a ${voiceTone} tone and a ${writingStyle} style.`;
  } else if (subcategory === 'miscellaneous') {
    const productDescription = document.getElementById('product-description').value;
    topic = `Creating ${model.split('-').join(' ')} for marketing`;
    audience = productDescription;
    prompt = `Create a ${model.split('-').join(' ')} for ${audience}. Use a ${voiceTone} tone and a ${writingStyle} style.`;
  }

  // Display the prompt
  document.getElementById('output').value = prompt;
  document.getElementById('output-section').style.display = 'block';
});
