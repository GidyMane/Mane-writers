from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from django.core.mail import EmailMessage
from django.conf import settings
from rest_framework.response import Response
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# Create your views here.


class EmailViewSet(ViewSet):
    def send_mail_attachment(self, request):
        data=request.POST.get("jsonField1")
        
        file=request.FILES.get("files")
        print(data)
        pairs = data.split(',')
        print(pairs)


# Create a dictionary from the key-value pairs
        result_dict = {}
        for pair in pairs:
            if "{" in pair:
                pair=pair.replace("{", "")
            elif "}" in pair:
                pair=pair.replace("}", "")
            if '"' in pair:
                pair=pair.replace('"', "")

            print(pair)

            key, value = pair.split(':')
            # print(key, value)
            result_dict[key] = value


        print(result_dict)

        html_message = render_to_string("email.html", { 'context': result_dict, })
      
        
        try:
            email=EmailMessage(
                        
                subject=result_dict.get('topic'),
                body=html_message,
                to=[settings.EMAIL_HOST_USER],
            )
            email.content_subtype= "html"
            email.attach(
                file.name,
                file.read(),
                file.content_type
            )

            email.send()
            return Response({
            "message":f"email has been sent successfully",
            }, status=200)

        except:
            return Response({"Error": "Could not send mail"}, status=400)


       
