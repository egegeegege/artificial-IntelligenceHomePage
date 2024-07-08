        // JavaScript kodu
       // JavaScript kodu
       document.addEventListener("DOMContentLoaded", function() {
        var navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(function(link) {
            link.addEventListener('mouseenter', function() {
                this.style.transform = "scale(1.1)";
            });
            link.addEventListener('mouseleave', function() {
                this.style.transform = "scale(1)";
            });
        });
    
        var messageIcon = document.getElementById('message-icon');
        var commentPanel = document.getElementById('comment-panel');
        var closeCommentPanel = document.getElementById('close-comment-panel');
        var submitComment = document.getElementById('submit-comment');
        var commentBox = document.getElementById('comment-box');
        var commentSuccess = document.getElementById('comment-success');
    
        messageIcon.addEventListener('click', function() {
            commentPanel.style.display = 'block';
            commentPanel.style.transform = 'translate(-50%, -50%)';
        });
    
        closeCommentPanel.addEventListener('click', function() {
            commentPanel.style.transform = 'translate(-50%, -100vh)';
            setTimeout(function() {
                commentPanel.style.display = 'none';
            }, 300);
        });
    
        submitComment.addEventListener('click', function() {
            commentSuccess.style.display = 'block';
            setTimeout(function() {
                commentSuccess.style.display = 'none';
            }, 2000); // 2000 ms = 2 seconds, adjust as needed
        });
    });