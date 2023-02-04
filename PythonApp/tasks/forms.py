from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'description', 'important']
        widgets = { # This is the new part

    'title': forms.TextInput(attrs={'class': 'form-control'}),
    'description': forms.Textarea(attrs={'class': 'form-control mb-2'}),
    'important': forms.CheckboxInput(attrs={'class': 'form-control mb-2'}),
}