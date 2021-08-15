from .models import Subject, Level
import json
def subjects_list(request):
    subjects = Subject.objects.all()    
    context = {"subjects" : []}
    for subject in subjects :
        context["subjects"].append(f"{subject.name}")
    subjects = context["subjects"]
    context["subjects"] = f"{subjects}"

    levels = Level.objects.all()
    levelsList = []
    for level in levels:
        levelsList.append(f"{level.name}")
    # return a list of level names : [first year, secodn year, .....]
    
    return({'subjects' : json.dumps(subjects), 'levels' : json.dumps(levelsList)})   
    